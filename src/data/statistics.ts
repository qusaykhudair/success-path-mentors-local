export type Statistic = {
  id: string;
  value: number;
  suffix?: string;
  labelKey: string;
};

export const statistics: Statistic[] = [
  { id: "students", value: 5000, suffix: "+", labelKey: "statistics.students" },
  { id: "tutors", value: 250, suffix: "+", labelKey: "statistics.tutors" },
  { id: "subjects", value: 30, suffix: "+", labelKey: "statistics.subjects" },
  { id: "successRate", value: 98, suffix: "%", labelKey: "statistics.successRate" },
];
