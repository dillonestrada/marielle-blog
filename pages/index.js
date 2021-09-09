import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Articles from '../components/articles';

export default function Home() {
  return (
    <div className="max-w-full">
      <Articles></Articles>
    </div>
  );
}
