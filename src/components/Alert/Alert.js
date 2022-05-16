import { Toast } from "react-bootstrap";
import './Alert.css';

const Alert = ({show, toggleShow, message, bg}) => {
  return (
    <Toast className='toast-cart' show={show} onClose={toggleShow} bg={bg}>
      <Toast.Header>
        <strong className="me-auto toast-header">{message}</strong>
      </Toast.Header>
    </Toast>
  )
}

export default Alert
