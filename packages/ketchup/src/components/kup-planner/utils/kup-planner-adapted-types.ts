import { FunctionalComponent } from '@stencil/core';
import { KupPlannerTask } from '../kup-planner-declarations';

export type TooltipContentComponent =
    | FunctionalComponent<{
          task: KupPlannerTask;
          fontSize: string;
          fontFamily: string;
      }>
    | JSX.Element;

export type TaskListHeaderComponent =
    | FunctionalComponent<{
          headerHeight: number;
          rowWidth: string;
          fontFamily: string;
          fontSize: string;
      }>
    | JSX.Element;

export type TaskListTableComponent =
    | FunctionalComponent<{
          rowHeight: number;
          rowWidth: string;
          fontFamily: string;
          fontSize: string;
          locale: string;
          tasks: KupPlannerTask[];
          selectedTaskId: string;
          /**
           * Sets selected task by id
           */
          setSelectedTask: (taskId: string) => void;
          onExpanderClick: (task: KupPlannerTask) => void;
      }>
    | JSX.Element;
