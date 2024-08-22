import React, { useEffect, useState, useRef } from "react";
import {
  init,
  dispose,
  Chart,
  CandleType,
  LineType,
  registerIndicator,
} from "klinecharts";
import generatedDataList from "./generatedDataList";
import Layout from "./Layout";
import { KLineChartPro, DefaultDatafeed } from "@klinecharts/pro";
import {
  TooltipShowRule,
  TooltipShowType,
  CandleTooltipCustomCallbackData,
} from "klinecharts";

interface TooltipPosition {
  top: string;
  left: string;
}

function getTooltipOptions(
  candleShowType: TooltipShowType,
  candleShowRule: TooltipShowRule,
  indicatorShowRule: TooltipShowRule,
  setTooltipData: React.Dispatch<
    React.SetStateAction<{
      open: string;
      close: string;
      change: string;
      changeColor: string;
    } | null>
  >,
  setTooltipPosition: React.Dispatch<React.SetStateAction<TooltipPosition>>,
  setRotationAngle: React.Dispatch<React.SetStateAction<number>>
) {
  return {
    candle: {
      tooltip: {
        showType: candleShowType,
        showRule: candleShowRule,
        custom: (data: CandleTooltipCustomCallbackData) => {
          const { prev, current } = data;
          const prevClose = prev?.close ?? current.open;
          const change = ((current.close - prevClose) / prevClose) * 100;

          // Log to debug
          console.log({
            open: current.open.toFixed(2),
            close: current.close.toFixed(2),
            change: `${change.toFixed(2)}%`,
            changeColor: change < 0 ? "#EF5350" : "#26A69A",
          });

          setTooltipData({
            open: current.open.toFixed(2),
            close: current.close.toFixed(2),
            change: `${change.toFixed(2)}%`,
            changeColor: change < 0 ? "#EF5350" : "#26A69A",
          });

          // const angle = (event.clientX / window.innerWidth) * 360;
          // setRotationAngle(angle);
          const tooltipPosition = {
            top: "50px", // Replace with actual mouse position or calculated value
            left: "350px", // Replace with actual mouse position or calculated value
          };
          setTooltipPosition(tooltipPosition);

          return [
            // { title: 'Open', value: current.open.toFixed(2) },
            // { title: 'Close', value: current.close.toFixed(2) },
            // {
            //   title: 'Change',
            //   value: {
            //     text: `${change.toFixed(2)}%`,
            //     color: change < 0 ? '#EF5350' : '#26A69A'
            //   }
            // }
          ];
        },
      },
    },
    indicator: {
      tooltip: {
        showRule: indicatorShowRule,
      },
    },
  };
}

const themes = [
  { key: "dark", text: "Dark" },
  { key: "light", text: "Light" },
];

interface EmojiEntity {
  emoji: number;
  text: string;
}

const mainIndicators = ["MA", "EMA", "SAR"];
const subIndicators = ["VOL", "MACD", "KDJ"];

export default function ChartType() {
  const chart = useRef<Chart | null>();
  const chartRef = useRef<HTMLDivElement | null>(null); // Correct typing here

  // const chartRef = useRef(null);
  const [theme, setTheme] = useState("light");
  const [candleShowType, setCandleShowType] = useState("standard");
  const [candleShowRule, setCandleShowRule] = useState("always");
  const [indicatorShowRule, setIndicatorShowRule] = useState("always");
  const paneId = useRef<string>("");
  const [tooltipData, setTooltipData] = useState<{
    open: string;
    close: string;
    change: string;
    changeColor: string;
  } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({
    top: "0px",
    left: "0px",
  });
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    chart.current = init("real-time-k-line");
    chart.current?.createIndicator("MA", false, { id: "candle_pane" });
    paneId.current = chart.current?.createIndicator("VOL", false) as string;

    chart.current?.createIndicator("KDJ", false, { height: 80 });
    chart.current?.applyNewData(generatedDataList());

    const chartElement = chartRef.current;
    if (chartElement) {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = chartElement.getBoundingClientRect();
        setTooltipPosition({
          top: `${event.clientY - rect.top}px`,
          left: `${event.clientX - rect.left}px`,
        });
        const angle = (event.clientX / window.innerWidth) * 360; // Example rotation angle
        setRotationAngle(angle);
      };
      chartElement.addEventListener("mousemove", handleMouseMove);
      return () => {
        chartElement.removeEventListener("mousemove", handleMouseMove);
      };
    }

    // Cleanup function to dispose of the chart on unmount
    return () => {
      if (chart.current) {
        dispose("real-time-k-line");
        chart.current = null;
      }
    };
  }, []);

  useEffect(() => {
    chart.current?.setStyles(theme);
  }, [theme]);
  useEffect(() => {
    const Data = chart.current?.setStyles(
      getTooltipOptions(
        candleShowType as TooltipShowType,
        candleShowRule as TooltipShowRule,
        indicatorShowRule as TooltipShowRule,
        setTooltipData,
        setTooltipPosition,
        setRotationAngle
      )
    );
    //     console.log("Data" + Data);
  }, [candleShowType, candleShowRule, indicatorShowRule]);

  const handleTimeIntervalChange = (interval: string) => {
    if (chart.current) {
      // Fetch or generate new data based on the interval
      const newData = generatedDataList(); // Replace with data specific to the interval
      chart.current.applyNewData(newData);
      // Here you would adjust the data according to the selected interval
    }
  };

  // Set theme
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(`${newTheme}-theme`);
  };

  return (
    <Layout>
      <div className="time_interval_buttons">
        {["15M", "1H", "4H", "1D", "1W"].map((interval) => (
          <button
            key={interval}
            onClick={() => handleTimeIntervalChange(interval)}
          >
            {interval}
          </button>
        ))}
      </div>
      <br></br>
      <div
        id="real-time-k-line"
        style={theme === "dark" ? { backgroundColor: "#1f2126" } : {}}
        className="k-line-chart"
      />
      {/* <div className="k-line-chart-menu-container">
        {themes.map(({ key, text }) => (
          <button key={key} onClick={() => handleThemeChange(key)}>
            {text}
          </button>
        ))}
      </div> */}
      {/* <div className="k-line-chart-menu-container"></div> */}

      {tooltipData && (
        <div className="tooltip-box">
          <div className="tooltip-row">
            <span className="tooltip-title">Open:</span>
            <span className="tooltip-value">{tooltipData.open}</span>
          </div>
          <div className="tooltip-row">
            <span className="tooltip-title">Close:</span>
            <span className="tooltip-value">{tooltipData.close}</span>
          </div>
          <div className="tooltip-row">
            <span className="tooltip-title">Change:</span>
            <span
              className="tooltip-value"
              style={{ color: tooltipData.changeColor }}
            >
              {tooltipData.change}
            </span>
          </div>
        </div>
      )}
    </Layout>
  );
}
