'use client'  
  
import { useState } from 'react'  
  
export default function ContactPage() {  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    message: '',  
  })  
  
  const handleSubmit = (e) => {  
    e.preventDefault()  
    alert('感谢您的留言！我们会尽快联系您。')  
    setFormData({ name: '', email: '', message: '' })  
  }  
  
  return (  
    <div style={{ padding: '50px 20px', maxWidth: '600px', margin: '0 auto' }}>  
      <h1>📬 联系我们</h1>  
        
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>  
        <div>  
          <label>您的姓名</label>  
          <input  
            type="text"  
            value={formData.name}  
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}  
            required  
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%' }}  
          />  
        </div>  
  
        <div>  
          <label>您的邮箱</label>  
          <input  
            type="email"  
            value={formData.email}  
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}  
            required  
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%' }}  
          />  
        </div>  
  
        <div>  
          <label>留言内容</label>  
          <textarea  
            value={formData.message}  
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}  
            required  
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%' }}  
            rows={5}  
          />  
        </div>  
  
        <button type="submit" style={{ padding: '15px', background: '#e91e63', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>  
          发送留言  
        </button>  
      </form>  
    </div>  
  )  
}