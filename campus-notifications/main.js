import { fetchNotifications } from "./api.js";
import { Log } from "./logger.js";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJteTk1MzRAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMjMzMCwiaWF0IjoxNzc3NzAxNDMwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYTQyZWEwN2ItNTc4MS00MDgzLTg0ZDktZjcwN2FmMTc1ZTY4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWFubmF2YSB5YXNoYXN3aW5pIiwic3ViIjoiMWUxY2NmMjMtNjZjYS00NmFhLWIwYTctNGMwYTRmNjc2ZTdmIn0sImVtYWlsIjoibXk5NTM0QHNybWlzdC5lZHUuaW4iLCJuYW1lIjoibWFubmF2YSB5YXNoYXN3aW5pIiwicm9sbE5vIjoicmEyMzExMDU2MDEwMDY3IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiMWUxY2NmMjMtNjZjYS00NmFhLWIwYTctNGMwYTRmNjc2ZTdmIiwiY2xpZW50U2VjcmV0IjoiZmd2d2pKTlRIVURNUFlCVyJ9.TN7hCfIi1mF_K0Bk0IHmdoU_PsvZHR7OqX6ZlrL0BH0";

const priorityMap = {
  placement: 5,
  "project-review": 4,
  event: 3,
  result: 2,
  "mid-sem": 1
};

const getTopNotifications = (notifications) => {
  return notifications
    .sort((a, b) => {
      const pA = priorityMap[a.Type?.toLowerCase()] || 0;
      const pB = priorityMap[b.Type?.toLowerCase()] || 0;

      if (pB !== pA) return pB - pA;

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, 10);
};

const run = async () => {
  try {
    await Log("frontend", "info", "api", "Fetching notifications", token);

    const data = await fetchNotifications(token);

    await Log("frontend", "info", "api", "Fetched notifications", token);

    const top10 = getTopNotifications(data);

    await Log("frontend", "info", "utils", "Sorted notifications", token);

    console.log("Top 10 Notifications:");
    console.log(top10);
  } catch (err) {
    await Log("frontend", "error", "api", "Error occurred", token);
    console.error(err);
  }
};

run();