import React from "react";
const Quotes = props => {
  return (
    <div className="Quotes-page">
      <h1>QUOTE</h1>
      <h3>fill out this form and well get back to you shortly with a quote!</h3>
      <form
        className="contact-form"
        id="contactform"
        action="//formspree.io/matt.dellitalia@gmail.com"
        method="POST"
      >
        <div className="form-container">
          <div className="form-input">
            <label for="first-name">First Name</label>
            <input type="text" name="first-name" required />
          </div>
          <div className="form-input">
            <label for="last-name">Last Name</label>
            <input type="text" name="last-name" required />
          </div>
          <div className="form-input">
            <label for="_replyto">Email Address</label>
            <input type="email" name="_replyto" required />
          </div>
          <div className="form-input">
            <label for="phone">Phone Number</label>
            <input name="phone" required />
          </div>
          <div className="form-input">
            <label for="location">Where?</label>
            <input name="location" required />
          </div>
          <div className="form-input">
            <label for="when">When?</label>
            <input type="date" name="when" required />
          </div>
          <div className="form-input">
            <label for="guests">Guests?</label>
            <input type="number" name="guests" required />
          </div>

          <div className="form-check">
            <label>Services</label>
            <div className="services-check">
              <label name="tables">
                Tables?
                <input type="checkbox" name="tables" />
                <span class="checkmark" />
              </label>
              <label name="tent">
                Tent?
                <input type="checkbox" name="tent" />
                <span class="checkmark" />
              </label>
              <label name="chairs">
                Chairs?
                <input type="checkbox" name="chairs" />
                <span class="checkmark" />
              </label>
              <label name="lighting">
                Lighting?
                <input type="checkbox" name="lighting" />
                <span class="checkmark" />
              </label>
              <label name="bar">
                Cocktail Bar?
                <input type="checkbox" name="bar" />
                <span class="checkmark" />
              </label>
              <label name="flooring">
                Flooring?
                <input type="checkbox" name="flooring" />
                <span class="checkmark" />
              </label>
              <label name="sidewalls">
                Sidewalls?
                <input type="checkbox" name="sidewalls" />
                <span class="checkmark" />
              </label>
              <label name="tablecloth">
                Tableclothes?
                <input type="checkbox" name="tablecloth" />
                <span class="checkmark" />
              </label>
            </div>
          </div>
          <div className="form-textarea">
            <label name="extra">
              More info?
              <textarea name="extra" />
            </label>
          </div>
          <div className="form-submit">
            <button className="submit-button" type="submit">
              Submit Your Quote!
            </button>
          </div>
        </div>
      </form>
      <div className="spacer2" />
    </div>
  );
};

export default Quotes;
