import PropTypes from "prop-types";

export default function Input({ label, value, changeHandler }) {
  return (
    <>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        id={label.toLowerCase()}
        type="number"
        value={value}
        onChange={changeHandler}
      />
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
