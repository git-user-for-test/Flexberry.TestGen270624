export default {
  projections: {
    ПланОперацияТОE: {
      executionDate: {
        __caption__: 'Дата выполнения'
      },
      maintenanceOperation: {
        __caption__: 'Операция ТО',
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    ПланОперацияТОL: {
      executionDate: {
        __caption__: 'Дата выполнения'
      },
      maintenanceOperation: {
        __caption__: 'Операция ТО',
        name: {
          __caption__: 'Наименование операции'
        }
      }
    }
  },
  validations: {
    executionDate: {
      __caption__: 'Дата выполнения'
    },
    maintenanceOperation: {
      __caption__: 'Операция ТО'
    },
    maintenancePlan: {
      __caption__: 'maintenancePlan'
    }
  }
};
