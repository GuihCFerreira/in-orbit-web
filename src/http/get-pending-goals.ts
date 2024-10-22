type PendingGoalResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequence: number;
  completionCount: number;
}[];

export async function getPendingGoals(): Promise<PendingGoalResponse> {
  const response = await fetch(`${import.meta.env.VITE_API_BASE}pending-goals`);
  const data = await response.json();

  return data;
}
