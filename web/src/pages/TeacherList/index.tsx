import React from 'react'
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/PageHeader/TeacherItem';
import Select from '../../components/Select';



import './styles.css'
 function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
       <PageHeader title="Estes são os proffys disponiveis" >
        <form id="search-teachers">
        <Select
       name="subject" 
       label="Matéria" 
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
         <Select
       name="week_day" 
       label="Dia da semana" 
       options={[
        {value:'0', label:'Domingo'},
        {value:'1', label:'Segunda-Feira'},
        {value:'2', label:'Terça-Feira'},
        {value:'3', label:'Quarta-Feira'},
        {value:'4', label:'Quinta-Feira'},
        {value:'5', label:'Sexta-Feira'},
        {value:'6', label:'Sábado'},


       ]}/>
         <Input type="time" name="time" label="Hora"/>
        
        </form>
       </PageHeader>
       <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>

       </main>
    </div>
  )
}
export default TeacherList;