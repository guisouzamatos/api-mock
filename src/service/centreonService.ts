import { faker } from '@faker-js/faker';

export class CentreonService {

    mapeamentoDados = {
        "DFSD000104": "14843_26064",
        "DFSD000106": "14843_17740",
        "DFSD000002": "14843_26064",
        "AMSD000001": "14843_29099",
        "ALSD000001": "14843_25709",
        "SPSD000005": "14843_25903",
        "SPSD000004": "14843_26042",
        "SPSD000003": "14843_25440",
        "SPSD000002": "14843_25900",
        "SPSD000001": "14843_25897",
        "SCSD000001": "14843_26047",
        "RJSD000004": "14843_25475",
        "RJSD000002": "14843_25758",
        "RJSD000001": "14843_25741",
        "PRSD000001": "14843_26035",
        "PISD000002": "14843_25679",
        "PISD000001": "14843_25738",
        "PESD000002": "14843_25728",
        "PESD000001": "14843_25458",
        "PBSD000006": "14843_25888",
        "PBSD000005": "14843_25885",
        "PBSD000003": "14843_25684",
        "PBSD000002": "14843_25731",
        "PASD000001": "14843_25891",
        "MGSD000001": "14843_26038",
        "ESSD000002": "14843_25751",
        "ESSD000001": "14843_25672",
        "DFSD000005": "14843_26070",
        "DFSD000004": "14843_25476",
        "DFSD000003": "14843_25629",
        "CESD000003": "14843_25755",
        "CESD000002": "14843_25735",
        "CESD000001": "14843_25724",
        "APSD000001": "14843_25688",
        "AMSD000002": "14843_25882",
        "ALSD000002": "14843_25631",
        "DFSD000107": "14843_17732",
        "ALL3000027": "14843_17738",
        "ALL3000028": "14843_16032"
    };

    obterSegundoDado(primeiroDado) {
        return this.mapeamentoDados[primeiroDado];
    }

    retornoServicoCentreon = (nomeCircuito) => {
        let servicoId = this.obterSegundoDado(nomeCircuito);
        console.log(`Nome Circuito ${nomeCircuito}`);
        return servicoId;
    }

    retornoHistoricoCentreon = (serviceId: string) => {
        console.log(`Serviço id ${serviceId}`);
        return [{"service_id": serviceId,
            "data":[{"data":[faker.helpers.arrayElement([0, 1, null]),faker.helpers.arrayElement([0, 1, null])]}],
            "times":[Date.now(), Date.now()]}]
    }
}