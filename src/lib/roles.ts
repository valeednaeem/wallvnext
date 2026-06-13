import { Permissions } from "./permissions";

export enum Roles {
  SUPER_ADMIN = "super_admin",
  ADMIN = "admin",
  PROJECT_MANAGER = "project_manager",
  TEAM_LEAD = "team_lead",
  DEVELOPER = "developer",
  DESIGNER = "designer",
  HR = "hr",
  ACCOUNTS = "accounts",
  CLIENT = "client",
  AI_AGENT = "ai_agent",
}

export const RolePermissions = {
  [Roles.SUPER_ADMIN]: Object.values(Permissions),

  [Roles.ADMIN]: [
    Permissions.USERS_CREATE,
    Permissions.USERS_READ,
    Permissions.USERS_UPDATE,
    Permissions.USERS_DELETE,

    Permissions.PROJECTS_CREATE,
    Permissions.PROJECTS_READ,
    Permissions.PROJECTS_UPDATE,
    Permissions.PROJECTS_DELETE,
  ],

  [Roles.PROJECT_MANAGER]: [
    Permissions.PROJECTS_CREATE,
    Permissions.PROJECTS_READ,
    Permissions.PROJECTS_UPDATE,

    Permissions.TASKS_CREATE,
    Permissions.TASKS_READ,
    Permissions.TASKS_UPDATE,
  ],

  [Roles.TEAM_LEAD]: [
    Permissions.PROJECTS_READ,
    Permissions.TASKS_READ,
    Permissions.TASKS_UPDATE,
  ],

  [Roles.DEVELOPER]: [
    Permissions.PROJECTS_READ,
    Permissions.TASKS_READ,
    Permissions.TASKS_UPDATE,
  ],

  [Roles.DESIGNER]: [
    Permissions.PROJECTS_READ,
    Permissions.TASKS_READ,
  ],

  [Roles.CLIENT]: [
    Permissions.PROJECTS_READ,
  ],

  [Roles.HR]: [
    Permissions.USERS_READ,
    Permissions.USERS_UPDATE,
  ],

  [Roles.ACCOUNTS]: [
    Permissions.BILLING_VIEW,
    Permissions.BILLING_MANAGE,
  ],

  [Roles.AI_AGENT]: [
    Permissions.PROJECTS_READ,
    Permissions.TASKS_READ,
  ],
};