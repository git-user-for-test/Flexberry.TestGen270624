



CREATE TABLE [FactOfTheMaintenance] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [StartDate] DATETIME  NULL,

	 [EndDate] DATETIME  NULL,

	 [ScanProtocol] NVARCHAR(MAX)  NULL,

	 [Equipment] UNIQUEIDENTIFIER  NOT NULL,

	 [MaintenancePlan] UNIQUEIDENTIFIER  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ScheduledMaintenanceOperation] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ExecutionDate] DATETIME  NOT NULL,

	 [MaintenanceOperation] UNIQUEIDENTIFIER  NOT NULL,

	 [MaintenancePlan] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [DocumentToTheModel] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] NVARCHAR(MAX)  NOT NULL,

	 [FileReference] NVARCHAR(MAX)  NOT NULL,

	 [EquipmentModel] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Location] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] NVARCHAR(MAX)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [MaintenanceProgram] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] NVARCHAR(MAX)  NOT NULL,

	 [Periodicity] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Employee] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] NVARCHAR(MAX)  NOT NULL,

	 [Patronymic] NVARCHAR(MAX)  NULL,

	 [Surname] NVARCHAR(MAX)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Organization] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] NVARCHAR(MAX)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Equipment] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [DateOfCommissioning] DATETIME  NULL,

	 [RunDate] DATETIME  NULL,

	 [ProductionDate] DATETIME  NULL,

	 [OperatingTime] INT  NULL,

	 [Name] NVARCHAR(MAX)  NULL,

	 [Description] NVARCHAR(MAX)  NULL,

	 [WarrantyPeriod] DATETIME  NULL,

	 [SupplyContract] UNIQUEIDENTIFIER  NULL,

	 [Location] UNIQUEIDENTIFIER  NOT NULL,

	 [Model] UNIQUEIDENTIFIER  NOT NULL,

	 [Accountable] UNIQUEIDENTIFIER  NOT NULL,

	 [ServiceContract] UNIQUEIDENTIFIER  NULL,

	 [Status] UNIQUEIDENTIFIER  NOT NULL,

	 [Type] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Periodicity] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] NVARCHAR(MAX)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Contract] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Date] DATETIME  NOT NULL,

	 [Number] NVARCHAR(MAX)  NULL,

	 [ValidityPeriod] DATETIME  NULL,

	 [Buyer] UNIQUEIDENTIFIER  NOT NULL,

	 [Seller] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [EquipmentModel] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] NVARCHAR(MAX)  NOT NULL,

	 [Manufacturer] UNIQUEIDENTIFIER  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [FactOperationOfTheMaintenance] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ExecutionDate] DATETIME  NOT NULL,

	 [Successfully] BIT  NOT NULL,

	 [MaintenanceOperation] UNIQUEIDENTIFIER  NOT NULL,

	 [ScheduledMaintenanceOperation] UNIQUEIDENTIFIER  NULL,

	 [FactOfTheMaintenance] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [StatusOfTheEquipment] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] NVARCHAR(MAX)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [TypeOfEquipment] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] NVARCHAR(MAX)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [MaintenanceOperation] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] NVARCHAR(MAX)  NOT NULL,

	 [MaintenanceProgram] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [PurposeOfTheMaintenanceModel] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [EquipmentModel] UNIQUEIDENTIFIER  NOT NULL,

	 [MaintenanceProgram] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [MaintenancePlan] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [StartDate] DATETIME  NULL,

	 [EndDate] DATETIME  NULL,

	 [Equipment] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAG] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(80)  NOT NULL,

	 [Login] varchar(50)  NULL,

	 [Pwd] varchar(50)  NULL,

	 [IsUser] bit  NOT NULL,

	 [IsGroup] bit  NOT NULL,

	 [IsRole] bit  NOT NULL,

	 [ConnString] varchar(255)  NULL,

	 [Enabled] bit  NULL,

	 [Email] varchar(80)  NULL,

	 [Comment] varchar(MAX)  NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMLG] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Group_m0] uniqueidentifier  NOT NULL,

	 [User_m0] uniqueidentifier  NOT NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAuObjType] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] nvarchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAuEntity] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [ObjectPrimaryKey] nvarchar(38)  NOT NULL,

	 [OperationTime] DATETIME  NOT NULL,

	 [OperationType] nvarchar(100)  NOT NULL,

	 [ExecutionResult] nvarchar(12)  NOT NULL,

	 [Source] nvarchar(255)  NOT NULL,

	 [SerializedField] nvarchar(max)  NULL,

	 [User_m0] uniqueidentifier  NOT NULL,

	 [ObjectType_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAuField] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Field] nvarchar(100)  NOT NULL,

	 [OldValue] nvarchar(max)  NULL,

	 [NewValue] nvarchar(max)  NULL,

	 [MainChange_m0] uniqueidentifier  NULL,

	 [AuditEntity_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMI] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User_m0] uniqueidentifier  NOT NULL,

	 [Agent_m0] uniqueidentifier  NOT NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Session] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [UserKey] uniqueidentifier  NULL,

	 [StartedAt] datetime  NULL,

	 [LastAccess] datetime  NULL,

	 [Closed] bit  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(100)  NOT NULL,

	 [Type] varchar(100)  NULL,

	 [IsAttribute] bit  NOT NULL,

	 [IsOperation] bit  NOT NULL,

	 [IsView] bit  NOT NULL,

	 [IsClass] bit  NOT NULL,

	 [SharedOper] bit  NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 [Comment] varchar(MAX)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Subject_m0] uniqueidentifier  NOT NULL,

	 [Agent_m0] uniqueidentifier  NOT NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMF] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [FilterText] varchar(MAX)  NULL,

	 [Name] varchar(255)  NULL,

	 [FilterTypeNView] varchar(255)  NULL,

	 [Subject_m0] uniqueidentifier  NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAC] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [TypeAccess] varchar(7)  NULL,

	 [Filter_m0] uniqueidentifier  NULL,

	 [Permition_m0] uniqueidentifier  NOT NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMLO] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Class_m0] uniqueidentifier  NOT NULL,

	 [Operation_m0] uniqueidentifier  NOT NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMLA] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [View_m0] uniqueidentifier  NOT NULL,

	 [Attribute_m0] uniqueidentifier  NOT NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMLV] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Class_m0] uniqueidentifier  NOT NULL,

	 [View_m0] uniqueidentifier  NOT NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMLR] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [StartDate] datetime  NULL,

	 [EndDate] datetime  NULL,

	 [Agent_m0] uniqueidentifier  NOT NULL,

	 [Role_m0] uniqueidentifier  NOT NULL,

	 [CreateTime] datetime  NULL,

	 [Creator] varchar(255)  NULL,

	 [EditTime] datetime  NULL,

	 [Editor] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))




