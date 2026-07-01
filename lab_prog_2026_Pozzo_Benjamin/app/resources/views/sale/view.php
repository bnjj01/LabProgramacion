<div class="row mb-4">
    <div class="col d-flex justify-content-between align-items-center border-bottom pb-2 title-custom">
        <h1 class="h3 mb-0">
            Detalle de Venta #<?= str_pad($this->venta['numero_venta'], 6, '0', STR_PAD_LEFT) ?>
        </h1>
        <a href="<?= APP_URL ?>sale" class="btn btn-secondary btn-sm">Volver al listado</a>
    </div>
</div>

<div class="card shadow-sm border-0 mb-4">
    <div class="card-body bg-light">
        <div class="row">
            <div class="col-md-6">
                <p class="mb-1"><strong>Cliente:</strong> <?= htmlspecialchars($this->venta['cliente']) ?></p>
                <p class="mb-1"><strong>Fecha:</strong> <?= htmlspecialchars($this->venta['fecha_formateada']) ?></p>
            </div>
            <div class="col-md-6 text-md-end">
                <p class="mb-1"><strong>Forma de Pago:</strong> <?= htmlspecialchars($this->venta['forma_pago']) ?></p>
                <p class="mb-1"><strong>Cajero:</strong> <?= htmlspecialchars($this->venta['vendedor']) ?></p>
                <p class="mb-1">
                    <strong>Estado:</strong> 
                    <?= $this->venta['estado'] == 1 ? '<span class="badge bg-success">Válida</span>' : '<span class="badge bg-danger">Anulada</span>' ?>
                </p>
            </div>
        </div>
    </div>
</div>

<div class="card shadow-sm border-0">
    <div class="card-header bg-dark text-white fw-bold">
        Productos Facturados
    </div>
    <div class="card-body p-0">
        <div class="table-responsive">
            <table class="table table-striped table-hover text-center mb-0">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Producto</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($this->venta['detalles'] as $item): ?>
                        <tr>
                            <td><?= htmlspecialchars($item['codigo']) ?></td>
                            <td><?= htmlspecialchars($item['nombre']) ?></td>
                            <td>$ <?= number_format($item['precio_unitario'], 2) ?></td>
                            <td><?= $item['cantidad'] ?></td>
                            <td>$ <?= number_format($item['subtotal'], 2) ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
                <tfoot>
                    <tr class="table-secondary fs-5">
                        <th colspan="4" class="text-end">TOTAL:</th>
                        <th class="text-success fw-bold">$ <?= number_format($this->venta['total'], 2) ?></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>