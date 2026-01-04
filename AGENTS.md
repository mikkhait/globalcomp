# Global Compensation Calculator - Architectural Patterns (Agents)

This document outlines the architectural patterns and design principles ("Agents") used in the Global Compensation Calculator project.

## 1. Core Architectural Pattern: Reactive Agent-Based Architecture
The application has been modernized to a reactive architecture where state management is decoupled from UI rendering and event handling.

### Key Components (Agents):
- **State Agent (`StateManager`)**: A reactive state container that implements the Observer pattern. It acts as the single source of truth for the application's data.
- **UI Orchestrator (`UIManager`)**: Responsible for all DOM manipulations, chart rendering, and visual feedback. It subscribes to the State Agent and reacts to changes.
- **Interaction Agent (`EventManager`)**: Handles all user inputs and external triggers, translating them into state updates.
- **Utility Agents (`CalculationUtils`, `FormatUtils`)**: Stateless providers of specialized logic.
- **Visualization Agents (`SalaryChart`, `CostOfLivingChart`, etc.)**: Factory-style classes for complex visual output.
- **Data Agent (`data.js`)**: Centralized repository of market data.

## 2. Design Patterns & Best Practices

### Observer Pattern (Reactive State)
The `StateManager` allows any component to subscribe to changes. This eliminates direct coupling between inputs and outputs, making the system easier to extend.

### Factory Pattern
Visualization components use a static `create()` factory method, encapsulating Chart.js initialization logic.

### Data-Driven UI
The `UIManager` uses `data-ui-component` attributes to select and update DOM elements, decoupling the JavaScript from the specific HTML structure.

### Command Pattern (Implicit)
User actions in the `EventManager` are treated as state update commands, ensuring a predictable flow of data (Input -> State Change -> UI Update).

### Resource Lifecycle Management
Strict "Destroy-before-Create" lifecycle for charts prevents memory leaks and ensures clean UI transitions.

### Modern JavaScript (ES6+)
- **Classes & Modules**: Full use of ES6 classes and modules for organization.
- **Async/Await**: Used for orchestration and initialization.
- **Intl API**: Standardized internationalization for numbers and currencies.
- **Destructuring & Spread**: Clean state management and property handling.

## 3. Future Modernization Roadmap (Active Transitions)
- **Reactive State Management**: Transitioning from direct DOM-to-logic mapping to a centralized, reactive state container.
- **Component-Based UI**: Further decomposing the main orchestrator into specialized UI managers (e.g., `UIManager`, `FormManager`).
- **Enhanced Type Safety**: Implementing more rigorous runtime checks and JSDoc annotations to simulate static typing benefits.
- **Optimized Rendering**: Introducing selective updates to minimize DOM churn and unnecessary chart redraws.
