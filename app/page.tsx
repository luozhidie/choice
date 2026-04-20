import Link from 'next/link'  
  
export default function Home() {  
  return (  
    <div>  
      {/* 首屏 */}  
      <section style={styles.hero}>  
        <h1 style={styles.heroTitle}>让服装生意更容易</h1>  
        <p style={styles.heroSubtitle}>  
          骆芷蝶智选——买手店首选的一站式服装供应链服务平台  
        </p>  
        <p style={styles.heroDesc}>严选供应商 · 专业选品指导 · 低门槛启动</p>  
        <div style={styles.heroButtons}>  
          <Link href="/suppliers" style={styles.btnPrimary}>  
            免费获取供应商名录  
          </Link>  
          <Link href="/courses" style={styles.btnSecondary}>  
            学习选品课程  
          </Link>  
        </div>  
      </section>  
  
      {/* 核心优势 */}  
      <section style={styles.features}>  
        <h2 style={styles.sectionTitle}>为什么选择骆芷蝶智选？</h2>  
        <div style={styles.featuresGrid}>  
          {features.map((feature, index) => (  
            <div key={index} style={styles.featureCard}>  
              <div style={styles.featureIcon}>{feature.icon}</div>  
              <h3 style={styles.featureTitle}>{feature.title}</h3>  
              <p style={styles.featureDesc}>{feature.desc}</p>  
            </div>  
          ))}  
        </div>  
      </section>  
  
      {/* 服务介绍 */}  
      <section style={styles.services}>  
        <h2 style={styles.sectionTitle}>我们的服务</h2>  
        <div style={styles.servicesGrid}>  
          {services.map((service, index) => (  
            <div key={index} style={styles.serviceCard}>  
              <h3 style={styles.serviceTitle}>{service.title}</h3>  
              <ul style={styles.serviceList}>  
                {service.items.map((item, i) => (  
                  <li key={i} style={styles.serviceItem}>{item}</li>  
                ))}  
              </ul>  
            </div>  
          ))}  
        </div>  
      </section>  
  
      {/* 行动号召 */}  
      <section style={styles.cta}>  
        <h2>准备好开始了吗？</h2>  
        <p>立即加入，开启您的服装创业之旅</p>  
        <Link href="/contact" style={styles.btnPrimary}>  
          联系我们  
        </Link>  
      </section>  
    </div>  
  )  
}  
  
const features = [  
  { icon: '🎯', title: '严选供应商', desc: '每一家供应商都经过严格审核' },  
  { icon: '📚', title: '专业选品指导', desc: '7 天入门课程 + 实战手册' },  
  { icon: '💰', title: '低门槛启动', desc: '1000 元即可启动' },  
  { icon: '🤝', title: '一对一服务', desc: '专属客服全程跟进' },  
  { icon: '📦', title: '品类齐全', desc: '覆盖全品类' },  
  { icon: '🚀', title: '快速上手', desc: '最快 24 小时完成首单' },  
]  
  
const services = [  
  {  
    title: '🏭 供应链服务',  
    items: ['严选供应商资源对接', '一件代发/小批量拿货', '品质把控与验货服务', '物流配送支持', '售后问题协调处理'],  
  },  
  {  
    title: '📖 知识付费',  
    items: ['《服装选品入门 7 天课》', '《供应商谈判实战手册》', '《库存管理避坑指南》', '1 对 1 选品咨询服务', '定期行业分享会'],  
  },  
  {  
    title: '💼 创业扶持',  
    items: ['买手店开店指导', '品牌定位咨询', '营销方案策划', '社群资源对接', '持续运营支持'],  
  },  
]  
  
const styles = {  
  hero: {  
    background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',  
    padding: '150px 5% 100px',  
    textAlign: 'center' as const,  
  },  
  heroTitle: {  
    fontSize: '3rem',  
    marginBottom: '1rem',  
    color: '#1a1a1a',  
  },  
  heroSubtitle: {  
    fontSize: '1.3rem',  
    color: '#555',  
    marginBottom: '0.5rem',  
  },  
  heroDesc: {  
    fontSize: '1.1rem',  
    color: '#666',  
    marginBottom: '2rem',  
  },  
  heroButtons: {  
    display: 'flex',  
    gap: '1rem',  
    justifyContent: 'center',  
    flexWrap: 'wrap' as const,  
  },  
  btnPrimary: {  
    background: '#e91e63',  
    color: 'white',  
    padding: '1rem 2rem',  
    borderRadius: '30px',  
    textDecoration: 'none',  
    fontWeight: 'bold',  
    display: 'inline-block',  
  },  
  btnSecondary: {  
    background: 'white',  
    color: '#e91e63',  
    padding: '1rem 2rem',  
    borderRadius: '30px',  
    textDecoration: 'none',  
    fontWeight: 'bold',  
    border: '2px solid #e91e63',  
    display: 'inline-block',  
  },  
  features: {  
    padding: '80px 5%',  
    background: '#fff',  
  },  
  sectionTitle: {  
    textAlign: 'center' as const,  
    fontSize: '2rem',  
    marginBottom: '3rem',  
    color: '#1a1a1a',  
  },  
  featuresGrid: {  
    display: 'grid',  
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',  
    gap: '2rem',  
    maxWidth: '1200px',  
    margin: '0 auto',  
  },  
  featureCard: {  
    textAlign: 'center' as const,  
    padding: '2rem',  
    borderRadius: '10px',  
    background: '#fafafa',  
  },  
  featureIcon: {  
    fontSize: '3rem',  
    marginBottom: '1rem',  
  },  
  featureTitle: {  
    marginBottom: '0.5rem',  
    color: '#1a1a1a',  
  },  
  featureDesc: {  
    color: '#666',  
  },  
  services: {  
    padding: '80px 5%',  
    background: '#fce4ec',  
  },  
  servicesGrid: {  
    display: 'grid',  
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',  
    gap: '2rem',  
    maxWidth: '1200px',  
    margin: '0 auto',  
  },  
  serviceCard: {  
    background: 'white',  
    padding: '2rem',  
    borderRadius: '10px',  
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',  
  },  
  serviceTitle: {  
    color: '#e91e63',  
    marginBottom: '1rem',  
  },  
  serviceList: {  
    listStyle: 'none',  
    padding: 0,  
  },  
  serviceItem: {  
    padding: '0.5rem 0',  
    paddingLeft: '1.5rem',  
    position: 'relative' as const,  
  },  
  cta: {  
    background: 'linear-gradient(135deg, #e91e63 0%, #f06292 100%)',  
    color: 'white',  
    padding: '80px 5%',  
    textAlign: 'center' as const,  
  },  
}  