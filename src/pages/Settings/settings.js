import styles from "./settings.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { viewActions } from "../../redux/Reducers/viewReducer";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [nav, setNav] = useState("Horizontal");
  const [catalog, setCatalog] = useState("Carousal");
  const [card, setCard] = useState("Standard");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      {/* Form to choose view for user */}
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(viewActions.setViews({ nav, catalog, card }));
          navigate("");
        }}
      >
        <h1 className={styles.title}>Choose Your View: </h1>

        <table className={styles.table}>
          <tbody>
            {/* For navigation bar */}
            <tr className={styles.formItems}>
              <td>
                <label>Navigation Bar:</label>
              </td>

              <td>
                <select
                  className={styles.select}
                  onChange={(e) => setNav(e.target.value)}
                >
                  <option>Horizontal</option>
                  <option>Vertical</option>
                </select>
              </td>
            </tr>

            {/* For choosing catalog view */}
            <tr className={styles.formItems}>
              <td>
                <label>Catalog View:</label>
              </td>
              <td>
                <select
                  className={styles.select}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCatalog(e.target.value);
                  }}
                >
                  <option>Carousal</option>
                  <option>View All</option>
                </select>
              </td>
            </tr>

            {/* For choosing Card view */}
            <tr className={styles.formItems}>
              <td>
                <label>Card View:</label>
              </td>
              <td>
                <select
                  className={styles.select}
                  onChange={(e) => {
                    setCard(e.target.value);
                  }}
                >
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Button to submit the form */}
        <button className={styles.btn} type="submit">
          Go Shopping
          <img
            src="https://cdn-icons-png.flaticon.com/128/2430/2430422.png"
            className={styles.icon}
            alt="Cart"
          />
        </button>
      </form>
    </div>
  );
}
