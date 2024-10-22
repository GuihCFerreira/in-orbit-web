interface CreateGoalRequest {
  title: string;
  desiredWeeklyFrequence: number;
}

export async function createGoal({
  title,
  desiredWeeklyFrequence,
}: CreateGoalRequest) {
  await fetch(`${import.meta.env.VITE_API_BASE}goals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequence,
    }),
  });
}
