import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/react.svg" />

        <Title title="Puttipong Thanakiatmongkol (Mark)">
          <h3>ตำแหน่ง : Fullstack</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/02/04").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66892316682
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202074@ssru.ac.th</p>
          
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>สวัสดีครับ ผมชอบเรียนรู้สิ่งใหม่ๆอยู่เสมอและไม่เคยหยุดพัฒนาตนเอง อยากร่วมงานกับบริษัทนี้เพราะผมประทับใจในในบริษัทและผมสามารถทำงานร่วมกันเป็นกลุ่มได้เป็นอย่างดี</p>
        </Title>

        <Title title="Work Experience">
          <p>ดูแลห้องคอมพิวเตอร์ในสาขา ITช่วยแก้ไขปัญหาคอมพิวเตอร์ที่มีปัญหาในด้านฮาร์ดแวร์ , ซอฟต์แวร์ติดตั้งโปรแกรมที่ใช้ในการเรียน , ลง Windowติดตั้งเปลี่ยนอุปกรณ์ภายในห้องเรียน                      อัพเกรด SSD , Ram , VGA</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>React.js</p>
          <p>Next.js</p>
          <p>Visual Code</p>
          <p>Github</p>
          <p>Microsoft Office</p>
          <p>Photoshop</p>
          <p>Canva</p>
        </Title>
      </div>
    </main>
  )
}

export default App
