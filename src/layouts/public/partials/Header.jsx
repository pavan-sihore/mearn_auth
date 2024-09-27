import PropTypes from 'prop-types'; // Make sure to import PropTypes

const Header = ({ onScrollToTarget }) => {

  return (
    <>
      {/* <!-- Language Change and Font Size Header --> */}
      <header className="bg-gray-200 p-2 text-center">
        <div className="flex justify-between max-w-6xl mx-auto">
        <button onClick={onScrollToTarget} className="p-2 bg-blue-500 text-white rounded">Go To Target</button>
            <div>
                <select className="p-1 border rounded">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                </select>
            </div>
            <div>
                <select className="p-1 border rounded">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>
        </div>
    </header>
    </>
  )
}

// PropTypes validation
Header.propTypes = {
  onScrollToTarget: PropTypes.func.isRequired,
};

export default Header