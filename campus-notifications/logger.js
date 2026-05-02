import axios from "axios";

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

export const Log = async (stack, level, pkg, message, token) => {
  try {
    await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.log("Logging failed");
  }
};