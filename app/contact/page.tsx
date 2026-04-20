'use client'  
  
import { useState } from 'react'  
import { supabase } from '@/lib/supabaseClient'  
  
export default function ContactPage() {  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    message: '',  
  })  
  const [loading, setLoading] = useState(false)  
  const [success, setSuccess] = useState(false)  
  
  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault()  
    setLoading(true)  
  
    try {  
      // 保存到 Supabase  
      const { error } = await supabase  
        .from('contacts')  
        .insert([  
          {  
            name: formData.name,  
            email: formData.email,  
            message: formData.message,  
          },  
        ])  
  
      if (error) throw error  
  
      setSuccess(true)  
      setFormData({ name: '', email: '', message: '' })  
      alert('留言已成功发送！我们会尽快联系您。')  
    } catch (error) {  
      console.error('Error submitting form:', error)  
      alert('提交失败，请重试。')  
    } finally {  
      setLoading(false)  
    }  
  }  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  
    setFormData({ ...formData, [e.target.name]: e.target.value })  
  }  
  
  return (  
    <div style={{ padding: '50px 20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>  
      <h1>📬 联系我们</h1>  
        
      {success && (  
        <div style={{ padding: '15px', background: '#d4edda', borderRadius: '5px', marginBottom: '20px' }}>  
          ✅ 留言已成功发送！  
        </div>  
      )}  
        
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>  
        <div>  
          <label style={{ display: 'block', marginBottom: '5px' }}>您的姓名</label>  
          <input  
            type="text"  
            name="name"  
            value={formData.name}  
            onChange={handleChange}  
            required  
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%' }}  
          />  
        </div>  
  
        <div>  
          <label style={{ display: 'block', marginBottom: '5px' }}>您的邮箱</label>  
          <input  
            type="email"  
            name="email"  
            value={formData.email}  
            onChange={handleChange}  
            required  
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%' }}  
          />  
        </div>  
  
        <div>  
          <label style={{ display: 'block', marginBottom: '5px' }}>留言内容</label>  
          <textarea  
            name="message"  
            value={formData.message}  
            onChange={handleChange}  
            required  
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '100%' }}  
            rows={5}  
          />  
        </div>  
  
        <button   
          type="submit"   
          disabled={loading}  
          style={{   
            padding: '15px',   
            background: loading ? '#ccc' : '#e91e63',   
            color: 'white',   
            border: 'none',   
            borderRadius: '5px',   
            cursor: loading ? 'not-allowed' : 'pointer'   
          }}  
        >  
          {loading ? '提交中...' : '发送留言'}  
        </button>  
      </form>  
    </div>  
  )  
}  