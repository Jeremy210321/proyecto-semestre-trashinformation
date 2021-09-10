import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return(
      <>
          <Formik
              initialValues={{
                  nombre:'',
                  telefono:'',
                  correo:'',
                  tema:'',
                  comentario:''
              }}

              validate={(valores) => {
                  let errores = {};

                  // Validacion nombre
                  if(!valores.nombre){
                      errores.nombre = 'Por favor ingresa un nombre y apellido'
                  } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                      errores.nombre = 'El nombre solo puede contener letras y espacios'
                  }

                  // Validacion telefono
                  if(!valores.telefono){
                      errores.telefono = 'Por favor ingresa un número de telefono'
                  } else if(!/^\d{7,10}$/.test(valores.telefono)){
                      errores.telefono = 'El teléfono solo puede contener números, mínimo 7 dígitos y máximo 10 dígitos.'
                  }

                  // Validacion correo
                  if(!valores.correo){
                      errores.correo = 'Por favor ingresa un correo electrónico'
                  } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                      errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guion bajo.'
                  }

                  // Validacion tema
                  if(!valores.tema){
                      errores.tema = 'Por favor ingresa el tema de tu opinión'
                  }

                  // Validacion comentario
                  if(!valores.comentario){
                      errores.comentario = 'Por favor ingresa un comentario antes de enviar'
                  }


                  return errores;
              }}

              // Se envia el formulario a una direccion
              onSubmit={(valores,{resetForm}) => {
                  resetForm();
                  console.log('Formulario enviado');
                  cambiarFormularioEnviado(true);
                  setTimeout(() => cambiarFormularioEnviado(false), 5000);
              }}
          >
              {({errors}) => (
                  <main>
                      <h2>COMENTARIOS Y SUGERENCIAS | ¿CÓMO LO ESTAMOS HACIENDO?</h2>
                      <p>
                          Sus ideas y opiniones son importantes para nosotros.
                          Gracias a sus comentarios, podemos identificar las áreas en que debemos mejorar.
                          Puede realizar comentarios y sugerencias del servicio de recolección de basura
                          en su barrio o puede comentarnos en que puede mejorar nuestra página web.
                      </p>
                      <Form className="formulario">
                          <div>
                              <label htmlFor="nombre">Nombre y apellido<b>*</b></label>
                              <Field
                                  type="text"
                                  name="nombre"
                                  placeholder="Jonh Díaz"
                                  id="nombre"
                              />
                              <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                          </div>

                          <div>
                              <label htmlFor="telefono">No. teléfono<b>*</b></label>
                              <Field
                                  type="text"
                                  name="telefono"
                                  placeholder="0991896520"
                                  id="telefono"

                              />
                              <ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
                          </div>

                          <div>
                              <label htmlFor="email">Email<b>*</b></label>
                              <Field
                                  type="email"
                                  name="correo"
                                  placeholder="jhonD@correo.com"
                                  id="correo"

                              />
                              <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
                          </div>

                          <div>
                              <label htmlFor="tema">¿Su opinión es acerca de...?<b>*</b></label>
                              <Field
                                  type="text"
                                  name="tema"
                                  placeholder="Recolección de basura en mi barrio"
                                  id="tema"

                              />
                              <ErrorMessage name="tema" component={() => (<div className="error">{errors.tema}</div>)} />
                          </div>

                          <div>
                              <label htmlFor="comentario">Comentario<b>*</b></label>
                              <Field
                                  name="comentario"
                                  as="textarea"
                                  id="comentario"
                              />
                              <ErrorMessage name="comentario" component={() => (<div className="error">{errors.comentario}</div>)} />
                          </div>

                          <div>
                              <p1>
                                  *Campo obligatorio
                              </p1>
                          </div>

                          <button type="submit">Enviar</button>
                          {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
                      </Form>

                  </main>

              )}

          </Formik>


      </>
  )
}

export default Formulario;
