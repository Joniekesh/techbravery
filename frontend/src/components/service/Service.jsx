import { services } from "../../mockData";
import "./service.scss";

const Service = () => {
  return (
    <div className="services">
      <h1>Services we can help you with</h1>
      <p>
        Whatever the tech solutions you want, we are at your beck and call to
        take your business to the next level. We take calculated and guided
        approach to architect, develope, test, deploy and maintain your secure,
        appealing, responsive and higher client conversion rate applications
        using modern technologies. It doesn't end there. We also have our every
        day solutions applications that ranges from fintech, edutech,
        agritech,aviation sectors etc.
      </p>
      <div className="services-items">
        {services.map((item) => (
          <div key={item.id} className="services-item">
            <img src={item.img} alt="" />
            <span className="item-name">{item.name}</span>
            <p className="item-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
