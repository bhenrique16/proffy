import React,{FormEvent, useState} from 'react'
import Input from '../../../components/Input';
import PageHeader from '../../../components/PageHeader';

import warningIcon from '../../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from '../../../components/Textarea';
import Select from '../../../components/Select';


 function TeacherForm() {

  const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
      { week_day: 0, from: '', to: '' }
  ]);
  function addNewScheduleItem() {
    setScheduleItems([
        ...scheduleItems,
        { week_day: 0, from: '', to: '' }
    ])
}
function setScheduluItemValue(position:number, field:string, value:string){
  const updatedScheduleItems = scheduleItems.map((scheduleItem,index)=>{
      if(index === position){
        return {...scheduleItem,[field]:value}
      }

      return scheduleItem
  })
 setScheduleItems(updatedScheduleItems);
  
}

  function handleCreateClass(e: FormEvent){
    e.preventDefault()
      console.log({name,avatar,whatsapp,bio,subject,cost,scheduleItems});
      
  }
  return (
    <div id="page-teacher-form" className="container">
    <PageHeader 
    title="Que incrivel que você quer dar aulas."
    description="O primeiro passo é preencher esse formulário de inscrição">
    </PageHeader>
    <main>
      <form onSubmit={handleCreateClass}>
      <fieldset>
        <legend>Seus dados</legend>
        <Input name="name" label="Nome Completo" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <Input name="avatar" label="Avatar"value={avatar} onChange={(e)=>{setAvatar(e.target.value)}} />
        <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}/>
        <Textarea name="bio" label="Biografia"value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
      </fieldset>

      <fieldset>
        <legend>Sobre a aula</legend>
      <Select
       name="subject" 
       label="Matéria" 
       value={subject}
       onChange={(e)=>{setSubject(e.target.value)}}
       options={[
        {value:'Artes', label:'Artes'},
        {value:'Biologia', label:'Biologia'},
        {value:'Educação Fisica', label:'Educação Fisica'},
        {value:'Física', label:'Física'},
        {value:'Geografia', label:'Geografia'},
        {value:'História', label:'História'},
        {value:'Matemática', label:'Matemática'},
        {value:'Química', label:'Química'},

       ]}/>
        <Input name="cost" label="Custo da sua hora por aula"value={cost}
       onChange={(e)=>{setCost(e.target.value)}}  />
      </fieldset>
      <fieldset><legend>Horários Disponíveis <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button></legend>
      {scheduleItems.map((scheduleItem,index )=>{
        return(
          <div key={scheduleItem.week_day} className="schedule-item">
      <Select
       name="week_day" 
       label="Dia da semana"
       value={scheduleItem.week_day} 
       onChange={e=> setScheduluItemValue(index,'week_day',e.target.value)}
       options={[
        {value:'0', label:'Domingo'},
        {value:'1', label:'Segunda-Feira'},
        {value:'2', label:'Terça-Feira'},
        {value:'3', label:'Quarta-Feira'},
        {value:'4', label:'Quinta-Feira'},
        {value:'5', label:'Sexta-Feira'},
        {value:'6', label:'Sábado'},
       ]}
       />
       <Input 
       name="from" 
       label="Das"
       type="time"
       value={scheduleItem.from} 
       onChange={e=> setScheduluItemValue(index,'from',e.target.value)}
        />
        
       <Input 
       name="to" 
       label="Até" 
       type="time"
       onChange={e=> setScheduluItemValue(index,'to',e.target.value)}
       value={scheduleItem.to} 
       />
      </div>
        )
      })}
      </fieldset>
      <footer>
        <p><img src={warningIcon} alt="Aviso importante" />
        Importante! <br />
        Preencha todos os dados
        </p>
        <button type="submit">Salvar Cadastro</button>
        </footer>
        </form>
    </main>
 </div>
  )
}
export default TeacherForm;