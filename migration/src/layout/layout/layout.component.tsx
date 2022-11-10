import React from 'react';
import { Row, Container as BootConatiner } from 'react-bootstrap';
import { NextPage } from 'next';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  height?: "max" | "min" | '100%';
  width?: "max" | "min" | '100%';
  title?: string;
};

const Container: NextPage<Props> = ({
  children,
  justify,
  align,
  direction,
  title,
  height,
  width
}) => {
  return (
    <>
      <Head>
        <title>{title ? title : 'Maicon Gabriel Alves'}</title>
      </Head>
      <BootConatiner fluid className={`${height === 'max' ? 'vh-100' : ''}`}>
        <Row
          className={`justify-content-${justify} align-items-${align} flex-${direction} ${height === '100%' ? 'h-100' : ''} ${width === '100%' ? 'w-100' : ''}`}
        >
          {children}
        </Row>
      </BootConatiner>
    </>
  );
};

export default Container;
