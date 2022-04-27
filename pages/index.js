import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from '../components/Homepage';
import HomePage from '../components/main'
import { Provider } from "react-redux";
import store from "../redux/store.ts";

export default function Home() {
  return (
    // <div className={styles.container}> \redux\store.ts
    //   <HomePage />
    // </div>

      <Provider store={store}>
        <HomePage />
      </Provider>
  ) 
}
