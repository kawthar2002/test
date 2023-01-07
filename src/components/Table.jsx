import PropTypes from "prop-types";

const toPossibleEmptyString = (string) => {
  return Boolean(string) ? string : "-";
}

const Table = ({ participants }) => {
  return (
    <table>
      <thead>
        <tr className="title">
          <th scope="col">Параметры и требования</th>
          {participants.map(({name, id}) => <th key={id} scope="col">{toPossibleEmptyString(name)}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr className="grey">
          <td className="descr">
            Наличие комплекса мероприятий, повышающих стандарты качества изготовления
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td className="descr">Гарантийные обязательства, мес</td>
          <td>80</td>
          <td>90</td>
          <td>75</td>
        </tr>
        <tr className="grey">
          <td className="descr">Срок изготовления лота, дней</td>
          <td>24</td>
          <td>24</td>
          <td>22</td>
        </tr>
        <tr>
          <td className="descr">Условия оплтаты</td>
          <td>30%</td>
          <td>100%</td>
          <td>60%</td>
        </tr>
        <tr className="grey">
          <td className="descr">Стоимость изготовления лота, руб (без НДС)</td>
          <td className="num">
            <p>3,700,000 руб.</p>
            <p>-25,000 руб.</p>
            <p>2,475,000 руб.</p>
          </td>
          <td className="num">
            <p>3,200,000 руб.</p>
            <p>-25,000 руб.</p>
            <p>2,475,000 руб.</p>
          </td>
          <td className="num">
            <p>2,800,000 руб.</p>
            <p>-25,000 руб.</p>
            <p>2,475,000 руб.</p>
          </td>
        </tr>
        <tr>
          <td className="descr">Действия:</td>
        </tr>
      </tbody>
    </table>
  );
};

const participant = PropTypes.shape({
  name: PropTypes.string,
  standart: PropTypes.string,
  date: PropTypes.number,
  garantee: PropTypes.number,
  condition: PropTypes.string,
  price: PropTypes.string,
});

Table.propTypes = {
  participants: PropTypes.arrayOf(participant),
};

export default Table;
