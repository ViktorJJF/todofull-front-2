import{s as t,e as a}from"./index-7bb36979.js";const A={list(e={sort:"nombre",order:"1"}){return t.get(a.DASHBOARD_BASE_URL+"/api/marketplaces",{params:e})},listCategories(e){return t.get(a.DASHBOARD_BASE_URL+`/api/marketplaces/${e}/categories`)},listCategory(e,r){return t.get(a.DASHBOARD_BASE_URL+`/api/marketplaces/${e}/categories/${r}`)},listCategoryAttributes(e,r){return t.get(a.DASHBOARD_BASE_URL+`/api/marketplaces/${e}/categories/${r}/attributes`)},update(e,r){return t.put(a.DASHBOARD_BASE_URL+`/api/marketplaces/${e}`,r)},create(e){return t.post(a.DASHBOARD_BASE_URL+"/api/marketplaces",e)},delete(e,r){return t.delete(a.DASHBOARD_BASE_URL+`/api/marketplaces/${e}`,{data:r})}},i={list(e){return t.get(a.DASHBOARD_BASE_URL+"/api/marketplace-categories",{params:e})},listOne(e){return t.get(a.DASHBOARD_BASE_URL+"/api/marketplace-categories/"+e)},update(e,r){return delete r._id,t.put(a.DASHBOARD_BASE_URL+`/api/marketplace-categories/${e}`,r)},create(e){return delete e._id,t.post(a.DASHBOARD_BASE_URL+"/api/marketplace-categories",e)},delete(e){return t.delete(a.DASHBOARD_BASE_URL+`/api/marketplace-categories/${e}`)}};export{i as c,A as m};
