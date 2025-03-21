import { Form, Button } from "react-bootstrap";
import "./Checkout.css";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import Alert from "../Alert/Alert";

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [alertBg, setAlertBg] = useState('');
  const toggleShow = () => setShow(!show);

  const { cart, getTotal } = useContext(CartContext)

  const createOrder = e => {
    e.preventDefault();

    setLoading(true)

    const objOrder = {
      items: cart,
      buyer: {
        name: name,
        phone: phone,
        email: email
      },
      total: getTotal(),
      date: new Date()
    }

    const batch = writeBatch(firestoreDb)
    const collectionRef = collection(firestoreDb, 'artworks')

    const ids = cart.map(prod => prod.id)
    const outOfStock = []

    getDocs(query(collectionRef, where(documentId(), 'in', ids)))
      .then(response => {
        response.docs.forEach(doc => {
          const dataDoc = doc.data()
          const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc })
          }
        })
      }).then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(firestoreDb, 'orders')
          return addDoc(collectionRef, objOrder)
        } else {
          return Promise.reject({ name: 'outOfStockError', products: outOfStock })
        }
      }).then(({ id }) => {
        batch.commit()
        setShow(true)
        setMessage(`Orden exitosa. El id de la orden es: ${id}`)
        setAlertBg('success')
        
      }).catch(error => {
        setShow(true)
        setMessage('Error en generar la orden. Stock superado')
        setAlertBg('danger')
      }).finally(() => {
        setLoading(false)
      })
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Form className="form-checkout" >
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            id="formName"
            placeholder="Ingrese su nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Celular</label>
          <input
            type="text"
            className="form-control"
            id="formPhone"
            placeholder="Ingrese su número de celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="formEmail"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button variant="dark" onClick={createOrder}>
          Generar Orden
        </Button>
      </Form>
      <Alert show={show} toggleShow={toggleShow} message={message} bg={alertBg}/>
    </>
  );
};

export default Checkout;
