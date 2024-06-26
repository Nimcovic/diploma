import style from '../style.module.css';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p className={style.text33} style={{height:'auto'}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Asperiores tempora libero eos itaque non laudantium nulla facilis aliquid. 
              Quos consectetur sequi quibusdam soluta in aperiam, quo ad unde rerum est.
            </p>

            <p className={style.text33} style={{height:'auto'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Optio tempora maxime fugiat incidunt sed fuga laboriosam explicabo nisi sint ut, 
              quae, molestiae, at voluptate! 
              Amet delectus obcaecati provident officiis debitis.               
            </p>

            <p className={style.text33} style={{height:'auto'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Earum quae ducimus reprehenderit? 
              Labore accusamus unde dolores aperiam. 
              Sapiente, ipsam. Molestias tempora quaerat rem 
              ducimus eius at culpa qui, ullam vero!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
