import React from "react";
import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CleanHand from "../img/wash-hand.svg";
import Distance from "../img/distance.svg";
import Doctor from "../img/doctor.svg";
import Home from "../img/home.svg";
import Call from "../img/call.svg";
import Workout from "../img/workout.svg";
import Food from "../img/food.svg";

export default function Prevention() {
  return (
    <div style={{ margin: "20px" }}>
      <Tabs>
        <TabList>
          <Tab>Prevention</Tab>
          <Tab>Treatments</Tab>
        </TabList>

        <TabPanel>
          <p>
            Protect yourself and others around you by knowing the facts and
            taking appropriate precautions. Follow advice provided by your local
            public health agency.
          </p>
          <hr />
          <p>To prevent the spread of COVID-19:</p>
          <ul>
            <li>
              Clean your hands often. Use soap and water, or an alcohol-based
              hand rub.
              <img src={CleanHand} style={{ height: 450 }} />
            </li>
            <li>
              Maintain a safe distance from anyone who is coughing or sneezing.
              <img src={Distance} style={{ height: 350 }} />
            </li>

            <li>Don’t touch your eyes, nose or mouth.</li>
            <li>
              Cover your nose and mouth with your bent elbow or a tissue when
              you cough or sneeze.
            </li>
            <li>Stay home if you feel unwell.</li>
            <li>
              If you have a fever, cough and difficulty breathing, seek medical
              attention. Call in advance.
            </li>
            <li>Follow the directions of your local health authority.</li>
          </ul>
          <p>
            Avoiding unneeded visits to medical facilities allows healthcare
            systems to operate more effectively, therefore protecting you and
            others.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            To date, there are no specific vaccines or medicines for COVID-19.
            Treatments are under investigation, and will be tested through
            clinical trials. World Health Organization
          </p>
          <hr />
          <p>Self-care</p>
          <p>
            If you feel sick you should rest, drink plenty of fluid, and eat
            nutritious food. Stay in a separate room from other family members,
            and use a dedicated bathroom if possible. Clean and disinfect
            frequently touched surfaces.
          </p>
          <p>
            Everyone should keep a healthy lifestyle at home. Maintain a healthy
            diet, sleep, stay active, and make social contact with loved ones
            through the phone or internet. Children need extra love and
            attention from adults during difficult times. Keep to regular
            routines and schedules as much as possible.
          </p>
          <img src={Home} style={{ height: 150 }} />
          <img src={Call} style={{ height: 250 }} />
          <img src={Workout} style={{ height: 250 }} />
          <img src={Food} style={{ height: 200 }} />
          <p>
            It is normal to feel sad, stressed, or confused during a crisis.
            Talking to people you trust, such as friends and family, can help.
            If you feel overwhelmed, talk to a health worker or counsellor.
          </p>
          <p>Medical treatments</p>
          <p>
            If you have mild symptoms and are otherwise healthy, self-isolate
            and contact your medical provider or a COVID-19 information line for
            advice.
          </p>
          <p>
            Seek medical care if you have a fever, a cough, and difficulty
            breathing. Call in advance.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}
