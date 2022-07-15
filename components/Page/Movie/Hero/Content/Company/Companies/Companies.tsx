import { IntCompanies } from "../../../interface";
import Company from "../Company/Company"
import { Wrapper } from "./styles";
const Companies = ({companies}:IntCompanies) => {
    return(
        <Wrapper>
            {companies.map(({id,logo_path,name,origin_country}) =>
                <Company
                    country={origin_country}
                    image={logo_path}
                    key={id}
                    title={name}
                />
            )}
        </Wrapper>
    )
}
export default Companies;