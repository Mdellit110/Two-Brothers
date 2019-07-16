import React from "react";
const Quotes = props => {
  return (
    <div className="Quotes-page">
      <form
        className="contact-form"
        id="contactform"
        action="//formspree.io/matt.dellitalia@gmail.com"
        method="POST"
      >
        <div className="form-container">
          <div className="form-input">
            <label name="first-name">First Name</label>
            <input type="text" name="first-name" />
          </div>
          <div className="form-input">
            <label name="last-name">Last Name</label>
            <input type="text" name="last-name" />
          </div>
          <div className="form-input">
            <label name="_replyto">Email Address</label>
            <input type="email" name="_replyto" />
          </div>
          <div className="form-input">
            <label name="phone">Phone Number</label>
            <input name="phone" />
          </div>
          <div className="form-input">
            <label name="location">Where?</label>
            <input name="location" />
          </div>
          <div className="form-input">
            <label name="when">When?</label>
            <input type="date" name="when" />
          </div>
          <div className="form-input">
            <label name="guests">Guests?</label>
            <input type="number" name="guests" />
          </div>

          <div className="form-check">
            <label>Services</label>
            <div className="services-check">
              <label name="tent">
                Tent?
                <input type="checkbox" name="tent" />
                <span class="checkmark" />
              </label>
              <label name="tables">
                Tables?
                <input type="checkbox" name="tables" />
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
                Bar?
                <input type="checkbox" name="bar" />
                <span class="checkmark" />
              </label>
            </div>
          </div>
          <div className="form-input">
            <label>More info?</label>
            <textarea name="extra" />
          </div>
          <div className="form-input">
            <input className="contact-input" type="submit" value="Send" />
          </div>
        </div>
      </form>
      <div className="spacer2" />
    </div>
  );
};

export default Quotes;
