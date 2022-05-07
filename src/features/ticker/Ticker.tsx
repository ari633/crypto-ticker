import React, { useState, useMemo } from 'react'
import { Table, Divider } from 'antd'
import { useGetTickerQuery, useGetAssetQuery } from '../../services/ticker'
import { Ticker as ModelTicker } from '../../model/ticker'

const Ticker = () => {
  const { data: tickers, isLoading } = useGetTickerQuery('', {
    pollingInterval: 2000
  })
  const { data: asset } = useGetAssetQuery('')

  const [displayTicker, setDisplayTicker] = useState<ModelTicker[]>([]);
  
  useMemo(() => {
    if (tickers) {
      setDisplayTicker(tickers)
    }
  }, [tickers])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'symbol',
      render: (val: string) => `${val}`,
      sorter: (a: any, b: any) => a.symbol - b.symbol
    },
    {
      title: 'Last Price',
      dataIndex: 'lastPrice',
      sorter: (a: any, b: any) => a.lastPrice - b.lastPrice
    },
    {
      title: '24 Change',
      dataIndex: 'priceChangePercent',
      sorter: (a: any, b: any) => a.priceChangePercent - b.priceChangePercent
    },
    {
      title: 'Market Cap',
      dataIndex: 'volume',
      sorter: (a: any, b: any) => a.volume - b.volume
    }
  ]
  
  if (isLoading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }

  return (
    <>
      <Divider />
      <Table
        columns={columns}
        dataSource={displayTicker}
        rowKey={record => record.symbol}
      />
    </>
  )
}

export default Ticker;