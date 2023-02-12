import Layout from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [country, setcountry] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/country", {
        headers: { "Content-type": "text/plain" },
      })
      .then((res) => {
        setcountry(res.data);
      });
  }, []);

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">Welcome to world_app!</h5>
          <table className="table bg-white">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>SurfaceArea</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              {country.map((value, key) => (
                <tr key={key}>
                  {/* <th>{value.Code}</th> */}
                  <th>{value.Name}</th>
                  {/* <th>{value.Continent}</th>
                  <th>{value.Region}</th> */}
                  <th>{value.SurfaceArea}</th>
                  {/* <th>{value.IndepYear}</th> */}
                  <th>{value.Population}</th>
                  {/* <th>{value.LifeExpectancy}</th>
                  <th>{value.GNP}</th>
                  <th>{value.GNPOld}</th>
                  <th>{value.LocalName}</th>
                  <th>{value.GovernmentForm}</th>
                  <th>{value.HeadOfState}</th>
                  <th>{value.Capital}</th>
                  <th>{value.Code2}</th> */}
                </tr>
              ))}
            </tbody>
          </table>
          <Link href="./other">
            <button className="btn btn-primary">go to Other &gt;&gt;</button>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
