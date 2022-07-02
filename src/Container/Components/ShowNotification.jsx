import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const showNotification = (type, title, description = '') => {
  if (type === 'success') {
    toast.success(title, {autoClose:3000})
  } else if(type === 'error') {
    toast.error(title, {autoClose:3000})
  }
}

