import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api/index";
import { Line, Bar } from "react-chartjs-2";
import "./Chart.module.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import Columns from "react-columns";
import Form from "react-bootstrap/Form";
import NumberFormat from "react-number-format";
import ReactTooltip from "react-tooltip";
import RingLoader from "react-spinners/RingLoader";

export default function Graph() {
  const [dailyData, setdailyData] = useState({});
  const [hasError, setError] = useState(false);
  const [latest, setLatest] = useState([]);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  useEffect(() => {
    async function fetchData() {
      setdailyData(await fetchDailyData());
    }
    console.log(dailyData);
    fetchData();

    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <>
      <div>
        <CardDeck>
          <Card
            bg="secondary"
            text="white"
            className="text-center"
            style={{ margin: "10px" }}
          >
            <Card.Body>
              <Card.Title>Cases</Card.Title>
              {/* <Card.Text>{latest.cases}</Card.Text> */}
              <NumberFormat
                value={latest.cases}
                displayType={"text"}
                thousandSeparator={true}
                style={{ fontSize: "30px" }}
              />
            </Card.Body>
            <Card.Footer>
              <small>Last updated {new Date(lastUpdated).toDateString()}</small>
            </Card.Footer>
          </Card>
          <Card
            bg="danger"
            text={"white"}
            className="text-center"
            style={{ margin: "10px" }}
          >
            <Card.Body>
              <Card.Title>Deaths</Card.Title>
              <Card.Text>
                {" "}
                <NumberFormat
                  value={latest.deaths}
                  displayType={"text"}
                  thousandSeparator={true}
                  style={{ fontSize: "30px" }}
                />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated {new Date(lastUpdated).toDateString()}</small>
            </Card.Footer>
          </Card>
          <Card
            bg="success"
            text={"white"}
            className="text-center"
            style={{ margin: "10px" }}
          >
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>
                {" "}
                <NumberFormat
                  value={latest.recovered}
                  displayType={"text"}
                  thousandSeparator={true}
                  style={{ fontSize: "30px" }}
                />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated {new Date(lastUpdated).toDateString()}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
      <div className="container">{lineChart}</div>
    </>
  );
}
