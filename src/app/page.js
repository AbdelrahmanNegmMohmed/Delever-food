import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/sectionHeaders";

export default function Home() {
  return(
   <>
   <Header/>
   <Hero/>
   <HomeMenu/>
   <section className="text-center my-16" id="about">
    <SectionHeaders subHeader={'Our Story'} MainHeader={'About Us'}/>
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos suscipit tempora? Aperiam esse fugiat inventore laboriosam officiis quam rem!
          </p>
          <p>At consectetur delectus ducimus est facere iure molestias obcaecati quaerat vitae voluptate? Aspernatur dolor explicabo iste minus molestiae pariatur provident quibusdam saepe?</p>
          <p>Laborum molestias neque nulla obcaecati odio quia quod reprehenderit sit vitae voluptates? Eos, tenetur.</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
        subHeader={'Don \'t hesitate'}
        MainHeader={'Contact Us'}
        />
        <div className="mt-8">
      <a className=" text-axl underline text-gray-500" href="tel:+45745235125">+45 745 235 125</a>
        </div>
      </section>
    <footer className=" border-t p-8 text-center text-gray-500 mt-16">
      &copy; 2024 All rights reseved

    </footer>

   </>

  )
}
