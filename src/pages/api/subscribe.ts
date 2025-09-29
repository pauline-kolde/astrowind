// /netlify/functions/add-subscriber.js
import fetch from "node-fetch";

export async function handler(event) {
  try {
    const { email } = JSON.parse(event.body);

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        groups: [process.env.MAILERLITE_GROUP_ID],
      }),
    });

    const data = await response.json();

    return {
      statusCode: response.ok ? 200 : response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}
