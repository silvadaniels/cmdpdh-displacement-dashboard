(function exposeAnnualBuilder(root) {
  const ALL_YEARS = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

  function buildAnnualReportedPersons(records, geography) {
    const geographyRecords = records.filter(record => {
      if (!geography) return true;
      if (geography.level === "state") {
        return String(record.state_id).padStart(2, "0") === String(geography.id).padStart(2, "0");
      }
      if (geography.level === "municipality") {
        return String(record.municipality_id).padStart(5, "0") === String(geography.id).padStart(5, "0");
      }
      return true;
    });

    return ALL_YEARS.map(year => {
      if (year === 2021) return {year, value:null};
      const values = geographyRecords
        .filter(record => Number(record.year) === year)
        .map(record => record.persons_reported)
        .filter(value => value !== null && value !== "" && value !== undefined)
        .map(Number)
        .filter(Number.isFinite);
      return {
        year,
        value: values.length ? values.reduce((sum, value) => sum + value, 0) : null
      };
    });
  }

  root.buildAnnualReportedPersons = buildAnnualReportedPersons;
  if (typeof module !== "undefined" && module.exports) module.exports = {buildAnnualReportedPersons};
})(typeof globalThis !== "undefined" ? globalThis : window);
