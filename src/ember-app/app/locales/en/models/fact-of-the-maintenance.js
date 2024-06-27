export default {
  projections: {
    ФактТОE: {
      startDate: {
        __caption__: 'Дата начала'
      },
      endDate: {
        __caption__: 'Дата окончания'
      },
      scanProtocol: {
        __caption__: 'Скан протокола'
      },
      successfully: {
        __caption__: 'Успешно'
      },
      equipment: {
        __caption__: 'Оборудование',
        name: {
          __caption__: 'Номер'
        }
      },
      maintenancePlan: {
        __caption__: 'План ТО',
        startDate: {
          __caption__: 'Дата начала'
        },
        endDate: {
          __caption__: 'Дата окончания'
        },
        equipment: {
          __caption__: '',
          name: {
            __caption__: 'Номер оборудования'
          },
          type: {
            __caption__: '',
            name: {
              __caption__: 'Тип оборудования'
            }
          },
          model: {
            __caption__: '',
            name: {
              __caption__: 'Модель оборудования'
            },
            manufacturer: {
              __caption__: '',
              name: {
                __caption__: 'Производитель оборудования'
              }
            }
          }
        }
      },
      factOperationOfTheMaintenance: {
        __caption__: 'Фактические операции ТО',
        executionDate: {
          __caption__: 'Дата выполнения'
        },
        successfully: {
          __caption__: 'Успешно'
        },
        maintenanceOperation: {
          __caption__: 'Операция ТО',
          name: {
            __caption__: 'Наименование'
          }
        },
        scheduledMaintenanceOperation: {
          __caption__: 'План операция ТО',
          executionDate: {
            __caption__: 'Дата выполнения'
          }
        }
      }
    },
    ФактТОL: {
      startDate: {
        __caption__: 'Дата начала'
      },
      endDate: {
        __caption__: 'Дата окончания'
      },
      scanProtocol: {
        __caption__: 'Скан протокола'
      },
      successfully: {
        __caption__: 'Успешно'
      },
      equipment: {
        __caption__: 'Номер',
        name: {
          __caption__: 'Номер'
        },
        model: {
          __caption__: '',
          name: {
            __caption__: 'Модель оборудования'
          },
          manufacturer: {
            __caption__: '',
            name: {
              __caption__: 'Производитель оборудования'
            }
          }
        },
        type: {
          __caption__: '',
          name: {
            __caption__: 'Тип оборудования'
          }
        }
      },
      maintenancePlan: {
        __caption__: 'Дата начала',
        startDate: {
          __caption__: 'Дата начала'
        }
      }
    }
  },
  validations: {
    startDate: {
      __caption__: 'Дата начала'
    },
    endDate: {
      __caption__: 'Дата окончания'
    },
    scanProtocol: {
      __caption__: 'Скан протокола'
    },
    successfully: {
      __caption__: 'Успешно'
    },
    equipment: {
      __caption__: 'Оборудование'
    },
    maintenancePlan: {
      __caption__: 'План ТО'
    },
    factOperationOfTheMaintenance: {
      __caption__: 'Фактические операции ТО'
    }
  }
};
