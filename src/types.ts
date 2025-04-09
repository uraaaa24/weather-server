// OpenWeatherレスポンス
export interface OpenWeatherResponse {
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
  wind: {
    speed: number;
  };
  dt_txt?: string;
}

// WeatherData
export interface WeatherData {
  temperature: number;
  conditions: string;
  humidity: number;
  wind_speed: number;
  timestamp: string;
}

// ForecastDay
export interface ForecastDay {
  date: string;
  temperature: number;
  conditions: string;
}

// GetForecastArgs
export interface GetForecastArgs {
  city: string;
  days?: number;
}

// GetForecastArgsの検証
export function isValidForecastArgs(args: any): args is GetForecastArgs {
  return (
    typeof args === "object" && 
    args !== null && 
    "city" in args &&
    typeof args.city === "string" &&
    (args.days === undefined || typeof args.days === "number")
  );
}
