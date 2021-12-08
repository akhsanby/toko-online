import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Container, Table } from "react-bootstrap";
import { Income } from "@/types";
import { _getIncome } from "@/config/api";
import useAuth from "@/lib/useAuth";
import { AdminLayout } from "@/components/Layout";

const Reports: NextPage = () => {
  const { replace } = useRouter();
  const user: any = useAuth().user;
  const [data, setData] = useState<Income>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: any = await _getIncome();
        if (result.e) console.log(result.e);
        if (result.error) {
          alert(result.error);
          replace("/");
        }
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    if (user?.email === "admin@bukapedia.com") fetchData();
    else replace("/");
  }, []);

  return (
    <AdminLayout>
      <Container className="my-4 font-roboto">
        <h1>Report Of Sales</h1>
        <Table hover className="my-4">
          <thead>
            <tr>
              <th>Name Product</th>
              <th>Price</th>
              <th>Sold</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {data?.items?.length &&
              data.items.map((product) => (
                <tr>
                  <td>
                    <h2>{product.name}</h2>
                    <span className="text-muted">{product.category}</span>
                  </td>
                  <td>${product.price}</td>
                  <td>{product.sold}</td>
                  <td>${product.total}</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" className="fw-bold">
                Total Income
              </td>
              <td className="fw-bold">${data?.total}</td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </AdminLayout>
  );
};

export default Reports;
