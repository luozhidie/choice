'use client'  
  
import Link from 'next/link'  
  
const suppliers = [  
  { id: 1, name: '广州时尚服饰', category: '女装', location: '广东广州' },  
  { id: 2, name: '杭州丝绸之家', category: '女装', location: '浙江杭州' },  
  { id: 3, name: '北京男装工厂', category: '男装', location: '北京' },  
  { id: 4, name: '深圳童装批发', category: '童装', location: '广东深圳' },  
  { id: 5, name: '上海配饰精选', category: '配饰', location: '上海' },  
  { id: 6, name: '东莞鞋包工厂', category: '鞋包', location: '广东东莞' },  
]  
  
export default function SuppliersPage() {  
  return (  
    <div style={styles.container}>  
      <header style={styles.header}>  
        <h1>🏭 供应商名录</h1>  
        <p>严选优质供应商，助您轻松找货</p>  
      </header>  
  
      <div style={styles.grid}>  
        {suppliers.map((supplier) => (  
          <div key={supplier.id} style={styles.card}>  
            <h3>{supplier.name}</h3>  
            <p>📍 {supplier.location}</p>  
            <p>🏷️ {supplier.category}</p>  
            <Link href={`/suppliers/${supplier.id}`} style={styles.link}>  
              查看详情 →  
            </Link>  
          </div>  
        ))}  
      </div>  
    </div>  
  )  
}  
  
const styles = {  
  container: { padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' },  
  header: { textAlign: 'center' as const, marginBottom: '40px' },  
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },  
  card: { padding: '20px', border: '1px solid #ddd', borderRadius: '10px' },  
  link: { color: '#e91e63', textDecoration: 'none', fontWeight: 'bold' },  
}  