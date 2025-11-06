// Datos del portafolio 2024 con escala 10%-90%
const portfolioData2024 = {
    datasets: [
        {
            label: '1-Semestre 2024',
            data: [
                {
                    x: 500, // NPV (k€)
                    y: 50,  // PE (%)
                    r: 50,  // Tamaño basado en recursos (k€)
                    label: 'AI/ML for Platforms',
                    recursos: 250,
                    recursosRaw: 250,
                    pe: 50,
                    npv: 500,
                    prioridad: '1-Semestre 2024',
                    categoriaPE: 'Medio'
                },
                {
                    x: 500, // NPV (k€)
                    y: 50,  // PE (%)
                    r: 50,  // Tamaño basado en recursos (k€)
                    label: 'S/M Incentives',
                    recursos: 250,
                    recursosRaw: 250,
                    pe: 50,
                    npv: 500,
                    prioridad: '1-Semestre 2024',
                    categoriaPE: 'Medio'
                },
                {
                    x: 250, // NPV (k€)
                    y: 90,  // PE (%)
                    r: 50,  // Tamaño basado en recursos (k€)
                    label: 'Trust & Defense',
                    recursos: 250,
                    recursosRaw: 250,
                    pe: 90,
                    npv: 250,
                    prioridad: '1-Semestre 2024',
                    categoriaPE: 'Alto'
                },
                {
                    x: 250, // NPV (k€)
                    y: 90,  // PE (%)
                    r: 50,  // Tamaño basado en recursos (k€)
                    label: 'Audit Online & SDLC',
                    recursos: 250,
                    recursosRaw: 250,
                    pe: 90,
                    npv: 250,
                    prioridad: '1-Semestre 2024',
                    categoriaPE: 'Alto'
                },
                {
                    x: 500, // NPV (k€)
                    y: 50,  // PE (%)
                    r: 75,  // Tamaño basado en recursos (k€) - más grande por 375k
                    label: 'ERP Core 2024',
                    recursos: 375,
                    recursosRaw: 375,
                    pe: 50,
                    npv: 500,
                    prioridad: '1-Semestre 2024',
                    categoriaPE: 'Medio'
                }
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        },
        {
            label: '2-Semestre 2024',
            data: [
                {
                    x: 500, // NPV (k€)
                    y: 50,  // PE (%)
                    r: 50,  // Tamaño basado en recursos (k€)
                    label: 'CRM + CDP 2024',
                    recursos: 250,
                    recursosRaw: 250,
                    pe: 50,
                    npv: 500,
                    prioridad: '2-Semestre 2024',
                    categoriaPE: 'Medio'
                },
                {
                    x: 250, // NPV (k€)
                    y: 90,  // PE (%)
                    r: 15,  // Tamaño basado en recursos (k€) - más pequeño por 75k
                    label: 'RPA Back-Office 2024',
                    recursos: 75,
                    recursosRaw: 75,
                    pe: 90,
                    npv: 250,
                    prioridad: '2-Semestre 2024',
                    categoriaPE: 'Alto'
                }
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        }
    ]
};

// Configuración del gráfico 2024
const config2024 = {
    type: 'bubble',
    data: portfolioData2024,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    padding: 20,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        size: 12
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const item = context.raw;
                        return [
                            `Iniciativa: ${item.label}`,
                            `NPV: ${item.npv}k€`,
                            `PE: ${item.pe}% (${item.categoriaPE})`,
                            `Recursos: ${item.recursosRaw}k€`,
                            `Prioridad: ${item.prioridad}`
                        ];
                    }
                }
            },
            title: {
                display: true,
                text: 'Portafolio 2024 - NPV vs PE vs Recursos',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'NPV - Retorno (k€)',
                    font: {
                        weight: 'bold',
                        size: 13
                    }
                },
                min: 200,
                max: 550,
                grid: {
                    color: 'rgba(0,0,0,0.1)'
                },
                ticks: {
                    callback: function(value) {
                        return value + 'k€';
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'PE - Probabilidad de Éxito (%)',
                    font: {
                        weight: 'bold',
                        size: 13
                    }
                },
                min: 10,
                max: 120,
                grid: {
                    color: 'rgba(0,0,0,0.1)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        },
        elements: {
            point: {
                hoverRadius: 15,
                hoverBorderWidth: 3
            }
        }
    }
};

// Crear el gráfico 2024
const ctx2024 = document.getElementById('portfolioBubbleChart2024').getContext('2d');
new Chart(ctx2024, config2024);

// Crear leyenda personalizada 2024
function createLegend2024() {
    const legendContainer = document.getElementById('chartLegend2024');
    const initiatives2024 = [
        { label: 'AI/ML for Platforms', color: 'rgba(54, 162, 235, 1)', periodo: 'S1-2024', npv: '500k€', pe: '50%', recursos: '250k€', categoria: 'Medio' },
        { label: 'S/M Incentives', color: 'rgba(54, 162, 235, 1)', periodo: 'S1-2024', npv: '500k€', pe: '50%', recursos: '250k€', categoria: 'Medio' },
        { label: 'Trust & Defense', color: 'rgba(54, 162, 235, 1)', periodo: 'S1-2024', npv: '250k€', pe: '90%', recursos: '250k€', categoria: 'Alto' },
        { label: 'Audit Online & SDLC', color: 'rgba(54, 162, 235, 1)', periodo: 'S1-2024', npv: '250k€', pe: '90%', recursos: '250k€', categoria: 'Alto' },
        { label: 'ERP Core 2024', color: 'rgba(54, 162, 235, 1)', periodo: 'S1-2024', npv: '500k€', pe: '50%', recursos: '375k€', categoria: 'Medio' },
        { label: 'CRM + CDP 2024', color: 'rgba(255, 99, 132, 1)', periodo: 'S2-2024', npv: '500k€', pe: '50%', recursos: '250k€', categoria: 'Medio' },
        { label: 'RPA Back-Office 2024', color: 'rgba(255, 99, 132, 1)', periodo: 'S2-2024', npv: '250k€', pe: '90%', recursos: '75k€', categoria: 'Alto' }
    ];

    initiatives2024.forEach(initiative => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        const emoji = initiative.categoria === 'Alto' ? '🟢' : initiative.categoria === 'Medio' ? '🟡' : '🔴';
        legendItem.innerHTML = `
            <div class="legend-color" style="background-color: ${initiative.color}"></div>
            <span>${emoji} <strong>${initiative.label}</strong> (${initiative.periodo})<br>
            <small>NPV: ${initiative.npv} | PE: ${initiative.pe}% | Recursos: ${initiative.recursos}</small></span>
        `;
        legendContainer.appendChild(legendItem);
    });
}

createLegend2024();
