import PropTypes from 'prop-types';

export default function PageHeading({ text }) {
  return <h1>{text}</h1>;
}

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};