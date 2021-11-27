import { Container, Table } from "react-bootstrap";
import { AdminLayout } from "../components/Layout";

export default function Reports() {
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
            <tr>
              <td>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <span className="text-muted">Men Clothing</span>
              </td>
              <td>$100</td>
              <td>10</td>
              <td>$1000</td>
            </tr>
            <tr>
              <td>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <span className="text-muted">Women Clothing</span>
              </td>
              <td>$200</td>
              <td>10</td>
              <td>$2000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" className="fw-bold">
                Total Income
              </td>
              <td className="fw-bold">$3000</td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </AdminLayout>
  );
}
