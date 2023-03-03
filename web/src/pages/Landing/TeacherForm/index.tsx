import React from 'react'
import PageHeader from '../../../components/PageHeader';
import './styles.css'

 function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
    <PageHeader 
    title="Que incrivel que você quer dar aulas."
    description="O primeiro passo é preencher esse formulário de inscrição">
    </PageHeader>
    <main>
      <fieldset>
        <legend>Seus dados</legend>
        <div className="input-block">
            <label htmlFor="subject">Nome completo</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="subject">Avatar</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="subject">WhatsApp</label>
            <input type="text" id="subject" />
          </div>

         
      </fieldset>
    </main>
 </div>
  )
}
export default TeacherForm;