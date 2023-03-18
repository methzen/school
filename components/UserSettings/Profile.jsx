import React from "react";

const ProfilForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <fieldset disabled>
            <legend>Profile's infos</legend>
            <div className="row mb-3">
                <div className="col">
                <label for="disabledTextInput" className="form-label">
                Fist Name
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Mouhamadou "
              />
                </div>
                <div className="col">
                <label for="disabledTextInput" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Dia "
              />
                </div>
                <label for="disabledSelect" className="form-label">
                You can only change your name once, and you must use your real name : <a> Change Name</a>
              </label>

            </div>
            <div className="mb-3">
              <label for="disabledSelect" className="form-label">
                Disabled select menu
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Disabled select</option>
              </select>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  disabled
                />
                <label className="form-check-label" for="disabledFieldsetCheck">
                  Can't check this
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>

        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default ProfilForm;
